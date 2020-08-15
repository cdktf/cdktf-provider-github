// https://www.terraform.io/docs/providers/github/r/repository_deploy_key.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface RepositoryDeployKeyConfig extends TerraformMetaArguments {
  readonly key: string;
  readonly readOnly?: boolean;
  readonly repository: string;
  readonly title: string;
}

// Resource

export class RepositoryDeployKey extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: RepositoryDeployKeyConfig) {
    super(scope, id, {
      terraformResourceType: 'github_repository_deploy_key',
      terraformGeneratorMetadata: {
        providerName: 'github'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._key = config.key;
    this._readOnly = config.readOnly;
    this._repository = config.repository;
    this._title = config.title;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // etag - computed: true, optional: false, required: true
  public get etag() {
    return this.getStringAttribute('etag');
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // key - computed: false, optional: false, required: true
  private _key: string;
  public get key() {
    return this._key;
  }
  public set key(value: string) {
    this._key = value;
  }

  // read_only - computed: false, optional: true, required: false
  private _readOnly?: boolean;
  public get readOnly() {
    return this._readOnly;
  }
  public set readOnly(value: boolean | undefined) {
    this._readOnly = value;
  }

  // repository - computed: false, optional: false, required: true
  private _repository: string;
  public get repository() {
    return this._repository;
  }
  public set repository(value: string) {
    this._repository = value;
  }

  // title - computed: false, optional: false, required: true
  private _title: string;
  public get title() {
    return this._title;
  }
  public set title(value: string) {
    this._title = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      key: this._key,
      read_only: this._readOnly,
      repository: this._repository,
      title: this._title,
    };
  }
}
