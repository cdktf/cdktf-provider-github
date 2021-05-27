// https://www.terraform.io/docs/providers/github/r/repository_webhook.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface RepositoryWebhookConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/github/r/repository_webhook.html#active RepositoryWebhook#active}
  */
  readonly active?: boolean;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/github/r/repository_webhook.html#events RepositoryWebhook#events}
  */
  readonly events: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/github/r/repository_webhook.html#name RepositoryWebhook#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/github/r/repository_webhook.html#repository RepositoryWebhook#repository}
  */
  readonly repository: string;
  /**
  * configuration block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/github/r/repository_webhook.html#configuration RepositoryWebhook#configuration}
  */
  readonly configuration?: RepositoryWebhookConfiguration[];
}
export interface RepositoryWebhookConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/github/r/repository_webhook.html#content_type RepositoryWebhook#content_type}
  */
  readonly contentType?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/github/r/repository_webhook.html#insecure_ssl RepositoryWebhook#insecure_ssl}
  */
  readonly insecureSsl?: boolean;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/github/r/repository_webhook.html#secret RepositoryWebhook#secret}
  */
  readonly secret?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/github/r/repository_webhook.html#url RepositoryWebhook#url}
  */
  readonly url: string;
}

function repositoryWebhookConfigurationToTerraform(struct?: RepositoryWebhookConfiguration): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    content_type: cdktf.stringToTerraform(struct!.contentType),
    insecure_ssl: cdktf.booleanToTerraform(struct!.insecureSsl),
    secret: cdktf.stringToTerraform(struct!.secret),
    url: cdktf.stringToTerraform(struct!.url),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/github/r/repository_webhook.html github_repository_webhook}
*/
export class RepositoryWebhook extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/github/r/repository_webhook.html github_repository_webhook} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options RepositoryWebhookConfig
  */
  public constructor(scope: Construct, id: string, config: RepositoryWebhookConfig) {
    super(scope, id, {
      terraformResourceType: 'github_repository_webhook',
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
    this._repository = config.repository;
    this._configuration = config.configuration;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // active - computed: false, optional: true, required: false
  private _active?: boolean;
  public get active() {
    return this.getBooleanAttribute('active');
  }
  public set active(value: boolean ) {
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

  // repository - computed: false, optional: false, required: true
  private _repository: string;
  public get repository() {
    return this.getStringAttribute('repository');
  }
  public set repository(value: string) {
    this._repository = value;
  }
  // Temporarily expose input value. Use with caution.
  public get repositoryInput() {
    return this._repository
  }

  // url - computed: true, optional: false, required: false
  public get url() {
    return this.getStringAttribute('url');
  }

  // configuration - computed: false, optional: true, required: false
  private _configuration?: RepositoryWebhookConfiguration[];
  public get configuration() {
    return this.interpolationForAttribute('configuration') as any;
  }
  public set configuration(value: RepositoryWebhookConfiguration[] ) {
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
      repository: cdktf.stringToTerraform(this._repository),
      configuration: cdktf.listMapper(repositoryWebhookConfigurationToTerraform)(this._configuration),
    };
  }
}
