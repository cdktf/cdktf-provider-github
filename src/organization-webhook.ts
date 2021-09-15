// https://www.terraform.io/docs/providers/github/r/organization_webhook.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface OrganizationWebhookConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/github/r/organization_webhook.html#active OrganizationWebhook#active}
  */
  readonly active?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/github/r/organization_webhook.html#events OrganizationWebhook#events}
  */
  readonly events: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/github/r/organization_webhook.html#name OrganizationWebhook#name}
  */
  readonly name?: string;
  /**
  * configuration block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/github/r/organization_webhook.html#configuration OrganizationWebhook#configuration}
  */
  readonly configuration?: OrganizationWebhookConfiguration[];
}
export interface OrganizationWebhookConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/github/r/organization_webhook.html#content_type OrganizationWebhook#content_type}
  */
  readonly contentType?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/github/r/organization_webhook.html#insecure_ssl OrganizationWebhook#insecure_ssl}
  */
  readonly insecureSsl?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/github/r/organization_webhook.html#secret OrganizationWebhook#secret}
  */
  readonly secret?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/github/r/organization_webhook.html#url OrganizationWebhook#url}
  */
  readonly url: string;
}

function organizationWebhookConfigurationToTerraform(struct?: OrganizationWebhookConfiguration): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    content_type: cdktf.stringToTerraform(struct!.contentType),
    insecure_ssl: cdktf.booleanToTerraform(struct!.insecureSsl),
    secret: cdktf.stringToTerraform(struct!.secret),
    url: cdktf.stringToTerraform(struct!.url),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/github/r/organization_webhook.html github_organization_webhook}
*/
export class OrganizationWebhook extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "github_organization_webhook";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/github/r/organization_webhook.html github_organization_webhook} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options OrganizationWebhookConfig
  */
  public constructor(scope: Construct, id: string, config: OrganizationWebhookConfig) {
    super(scope, id, {
      terraformResourceType: 'github_organization_webhook',
      terraformGeneratorMetadata: {
        providerName: 'github'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._active = config.active;
    this._events = config.events;
    this._name = config.name;
    this._configuration = config.configuration;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // active - computed: false, optional: true, required: false
  private _active?: boolean | cdktf.IResolvable;
  public get active() {
    return this.getBooleanAttribute('active');
  }
  public set active(value: boolean | cdktf.IResolvable ) {
    this._active = value;
  }
  public resetActive() {
    this._active = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get activeInput() {
    return this._active
  }

  // etag - computed: true, optional: false, required: false
  public get etag() {
    return this.getStringAttribute('etag');
  }

  // events - computed: false, optional: false, required: true
  private _events: string[];
  public get events() {
    return this.getListAttribute('events');
  }
  public set events(value: string[]) {
    this._events = value;
  }
  // Temporarily expose input value. Use with caution.
  public get eventsInput() {
    return this._events
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // name - computed: false, optional: true, required: false
  private _name?: string;
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string ) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name
  }

  // url - computed: true, optional: false, required: false
  public get url() {
    return this.getStringAttribute('url');
  }

  // configuration - computed: false, optional: true, required: false
  private _configuration?: OrganizationWebhookConfiguration[];
  public get configuration() {
    return this.interpolationForAttribute('configuration') as any;
  }
  public set configuration(value: OrganizationWebhookConfiguration[] ) {
    this._configuration = value;
  }
  public resetConfiguration() {
    this._configuration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configurationInput() {
    return this._configuration
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      active: cdktf.booleanToTerraform(this._active),
      events: cdktf.listMapper(cdktf.stringToTerraform)(this._events),
      name: cdktf.stringToTerraform(this._name),
      configuration: cdktf.listMapper(organizationWebhookConfigurationToTerraform)(this._configuration),
    };
  }
}
