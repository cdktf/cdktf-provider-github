// https://www.terraform.io/docs/providers/github/r/github_provider.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface GithubProviderConfig {
  /** Authenticate without a token.  When `anonymous`is true, the provider will not be able to access resourcesthat require authentication. */
  readonly anonymous?: boolean;
  /** The GitHub Base API URL */
  readonly baseUrl?: string;
  readonly individual?: boolean;
  /** Whether server should be accessed without verifying the TLS certificate. */
  readonly insecure?: boolean;
  /** The GitHub organization name to manage. If `individual` is false, `organization` is required. */
  readonly organization?: string;
  /** The OAuth token used to connect to GitHub. If `anonymous` is false, `token` is required. */
  readonly token?: string;
  /** Alias name */
  readonly alias?: string;
}

// Resource

export class GithubProvider extends cdktf.TerraformProvider {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: GithubProviderConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'github',
      terraformGeneratorMetadata: {
        providerName: 'github',
        providerVersionConstraint: '~> 2.0'
      },
      terraformProviderSource: 'github'
    });
    this._anonymous = config.anonymous;
    this._baseUrl = config.baseUrl;
    this._individual = config.individual;
    this._insecure = config.insecure;
    this._organization = config.organization;
    this._token = config.token;
    this._alias = config.alias;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // anonymous - computed: false, optional: true, required: false
  private _anonymous?: boolean;
  public get anonymous() {
    return this._anonymous;
  }
  public set anonymous(value: boolean  | undefined) {
    this._anonymous = value;
  }
  public resetAnonymous() {
    this._anonymous = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get anonymousInput() {
    return this._anonymous
  }

  // base_url - computed: false, optional: true, required: false
  private _baseUrl?: string;
  public get baseUrl() {
    return this._baseUrl;
  }
  public set baseUrl(value: string  | undefined) {
    this._baseUrl = value;
  }
  public resetBaseUrl() {
    this._baseUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get baseUrlInput() {
    return this._baseUrl
  }

  // individual - computed: false, optional: true, required: false
  private _individual?: boolean;
  public get individual() {
    return this._individual;
  }
  public set individual(value: boolean  | undefined) {
    this._individual = value;
  }
  public resetIndividual() {
    this._individual = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get individualInput() {
    return this._individual
  }

  // insecure - computed: false, optional: true, required: false
  private _insecure?: boolean;
  public get insecure() {
    return this._insecure;
  }
  public set insecure(value: boolean  | undefined) {
    this._insecure = value;
  }
  public resetInsecure() {
    this._insecure = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get insecureInput() {
    return this._insecure
  }

  // organization - computed: false, optional: true, required: false
  private _organization?: string;
  public get organization() {
    return this._organization;
  }
  public set organization(value: string  | undefined) {
    this._organization = value;
  }
  public resetOrganization() {
    this._organization = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get organizationInput() {
    return this._organization
  }

  // token - computed: false, optional: true, required: false
  private _token?: string;
  public get token() {
    return this._token;
  }
  public set token(value: string  | undefined) {
    this._token = value;
  }
  public resetToken() {
    this._token = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tokenInput() {
    return this._token
  }

  // alias - computed: false, optional: true, required: false
  private _alias?: string;
  public get alias() {
    return this._alias;
  }
  public set alias(value: string  | undefined) {
    this._alias = value;
  }
  public resetAlias() {
    this._alias = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aliasInput() {
    return this._alias
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      anonymous: cdktf.booleanToTerraform(this._anonymous),
      base_url: cdktf.stringToTerraform(this._baseUrl),
      individual: cdktf.booleanToTerraform(this._individual),
      insecure: cdktf.booleanToTerraform(this._insecure),
      organization: cdktf.stringToTerraform(this._organization),
      token: cdktf.stringToTerraform(this._token),
      alias: cdktf.stringToTerraform(this._alias),
    };
  }
}
