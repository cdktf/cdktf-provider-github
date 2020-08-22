// https://www.terraform.io/docs/providers/github/r/organization_webhook.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface OrganizationWebhookConfig extends TerraformMetaArguments {
  readonly active?: boolean;
  readonly events: string[];
  readonly name?: string;
  /** configuration block */
  readonly configuration?: OrganizationWebhookConfiguration[];
}
export interface OrganizationWebhookConfiguration {
  readonly contentType?: string;
  readonly insecureSsl?: boolean;
  readonly secret?: string;
  readonly url: string;
}

// Resource

export class OrganizationWebhook extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

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
  private _active?: boolean;
  public get active() {
    return this._active;
  }
  public set active(value: boolean | undefined) {
    this._active = value;
  }

  // etag - computed: true, optional: false, required: true
  public get etag() {
    return this.getStringAttribute('etag');
  }

  // events - computed: false, optional: false, required: true
  private _events: string[];
  public get events() {
    return this._events;
  }
  public set events(value: string[]) {
    this._events = value;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // name - computed: false, optional: true, required: false
  private _name?: string;
  public get name() {
    return this._name;
  }
  public set name(value: string | undefined) {
    this._name = value;
  }

  // url - computed: true, optional: false, required: true
  public get url() {
    return this.getStringAttribute('url');
  }

  // configuration - computed: false, optional: true, required: false
  private _configuration?: OrganizationWebhookConfiguration[];
  public get configuration() {
    return this._configuration;
  }
  public set configuration(value: OrganizationWebhookConfiguration[] | undefined) {
    this._configuration = value;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      active: this._active,
      events: this._events,
      name: this._name,
      configuration: this._configuration,
    };
  }
}
