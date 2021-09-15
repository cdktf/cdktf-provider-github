// https://www.terraform.io/docs/providers/github/r/repository_project.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface RepositoryProjectConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/github/r/repository_project.html#body RepositoryProject#body}
  */
  readonly body?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/github/r/repository_project.html#name RepositoryProject#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/github/r/repository_project.html#repository RepositoryProject#repository}
  */
  readonly repository: string;
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/github/r/repository_project.html github_repository_project}
*/
export class RepositoryProject extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "github_repository_project";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/github/r/repository_project.html github_repository_project} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options RepositoryProjectConfig
  */
  public constructor(scope: Construct, id: string, config: RepositoryProjectConfig) {
    super(scope, id, {
      terraformResourceType: 'github_repository_project',
      terraformGeneratorMetadata: {
        providerName: 'github'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._body = config.body;
    this._name = config.name;
    this._repository = config.repository;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // body - computed: false, optional: true, required: false
  private _body?: string;
  public get body() {
    return this.getStringAttribute('body');
  }
  public set body(value: string ) {
    this._body = value;
  }
  public resetBody() {
    this._body = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bodyInput() {
    return this._body
  }

  // etag - computed: true, optional: false, required: false
  public get etag() {
    return this.getStringAttribute('etag');
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // name - computed: false, optional: false, required: true
  private _name: string;
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      body: cdktf.stringToTerraform(this._body),
      name: cdktf.stringToTerraform(this._name),
      repository: cdktf.stringToTerraform(this._repository),
    };
  }
}
