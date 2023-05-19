# `provider`

Refer to the Terraform Registory for docs: [`github`](https://registry.terraform.io/providers/integrations/github/5.25.1/docs).

# `provider` Submodule <a name="`provider` Submodule" id="@cdktf/provider-github.provider"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GithubProvider <a name="GithubProvider" id="@cdktf/provider-github.provider.GithubProvider"></a>

Represents a {@link https://registry.terraform.io/providers/integrations/github/5.25.1/docs github}.

#### Initializers <a name="Initializers" id="@cdktf/provider-github.provider.GithubProvider.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.github.provider.GithubProvider;

GithubProvider.Builder.create(Construct scope, java.lang.String id)
//  .alias(java.lang.String)
//  .appAuth(GithubProviderAppAuth)
//  .baseUrl(java.lang.String)
//  .insecure(java.lang.Boolean)
//  .insecure(IResolvable)
//  .organization(java.lang.String)
//  .owner(java.lang.String)
//  .parallelRequests(java.lang.Boolean)
//  .parallelRequests(IResolvable)
//  .readDelayMs(java.lang.Number)
//  .token(java.lang.String)
//  .writeDelayMs(java.lang.Number)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.provider.GithubProvider.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-github.provider.GithubProvider.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-github.provider.GithubProvider.Initializer.parameter.alias">alias</a></code> | <code>java.lang.String</code> | Alias name. |
| <code><a href="#@cdktf/provider-github.provider.GithubProvider.Initializer.parameter.appAuth">appAuth</a></code> | <code><a href="#@cdktf/provider-github.provider.GithubProviderAppAuth">GithubProviderAppAuth</a></code> | app_auth block. |
| <code><a href="#@cdktf/provider-github.provider.GithubProvider.Initializer.parameter.baseUrl">baseUrl</a></code> | <code>java.lang.String</code> | The GitHub Base API URL. |
| <code><a href="#@cdktf/provider-github.provider.GithubProvider.Initializer.parameter.insecure">insecure</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Enable `insecure` mode for testing purposes. |
| <code><a href="#@cdktf/provider-github.provider.GithubProvider.Initializer.parameter.organization">organization</a></code> | <code>java.lang.String</code> | The GitHub organization name to manage. Use this field instead of `owner` when managing organization accounts. |
| <code><a href="#@cdktf/provider-github.provider.GithubProvider.Initializer.parameter.owner">owner</a></code> | <code>java.lang.String</code> | The GitHub owner name to manage. Use this field instead of `organization` when managing individual accounts. |
| <code><a href="#@cdktf/provider-github.provider.GithubProvider.Initializer.parameter.parallelRequests">parallelRequests</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Allow the provider to make parallel API calls to GitHub. |
| <code><a href="#@cdktf/provider-github.provider.GithubProvider.Initializer.parameter.readDelayMs">readDelayMs</a></code> | <code>java.lang.Number</code> | Amount of time in milliseconds to sleep in between non-write requests to GitHub API. |
| <code><a href="#@cdktf/provider-github.provider.GithubProvider.Initializer.parameter.token">token</a></code> | <code>java.lang.String</code> | The OAuth token used to connect to GitHub. |
| <code><a href="#@cdktf/provider-github.provider.GithubProvider.Initializer.parameter.writeDelayMs">writeDelayMs</a></code> | <code>java.lang.Number</code> | Amount of time in milliseconds to sleep in between writes to GitHub API. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-github.provider.GithubProvider.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-github.provider.GithubProvider.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `alias`<sup>Optional</sup> <a name="alias" id="@cdktf/provider-github.provider.GithubProvider.Initializer.parameter.alias"></a>

- *Type:* java.lang.String

Alias name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.25.1/docs#alias GithubProvider#alias}

---

##### `appAuth`<sup>Optional</sup> <a name="appAuth" id="@cdktf/provider-github.provider.GithubProvider.Initializer.parameter.appAuth"></a>

- *Type:* <a href="#@cdktf/provider-github.provider.GithubProviderAppAuth">GithubProviderAppAuth</a>

app_auth block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.25.1/docs#app_auth GithubProvider#app_auth}

---

##### `baseUrl`<sup>Optional</sup> <a name="baseUrl" id="@cdktf/provider-github.provider.GithubProvider.Initializer.parameter.baseUrl"></a>

- *Type:* java.lang.String

The GitHub Base API URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.25.1/docs#base_url GithubProvider#base_url}

---

##### `insecure`<sup>Optional</sup> <a name="insecure" id="@cdktf/provider-github.provider.GithubProvider.Initializer.parameter.insecure"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Enable `insecure` mode for testing purposes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.25.1/docs#insecure GithubProvider#insecure}

---

##### `organization`<sup>Optional</sup> <a name="organization" id="@cdktf/provider-github.provider.GithubProvider.Initializer.parameter.organization"></a>

- *Type:* java.lang.String

The GitHub organization name to manage. Use this field instead of `owner` when managing organization accounts.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.25.1/docs#organization GithubProvider#organization}

---

##### `owner`<sup>Optional</sup> <a name="owner" id="@cdktf/provider-github.provider.GithubProvider.Initializer.parameter.owner"></a>

- *Type:* java.lang.String

The GitHub owner name to manage. Use this field instead of `organization` when managing individual accounts.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.25.1/docs#owner GithubProvider#owner}

---

##### `parallelRequests`<sup>Optional</sup> <a name="parallelRequests" id="@cdktf/provider-github.provider.GithubProvider.Initializer.parameter.parallelRequests"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Allow the provider to make parallel API calls to GitHub.

You may want to set it to true when you have a private Github Enterprise without strict rate limits. Although, it is not possible to enable this setting on github.com because we enforce the respect of github.com's best practices to avoid hitting abuse rate limitsDefaults to false if not set

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.25.1/docs#parallel_requests GithubProvider#parallel_requests}

---

##### `readDelayMs`<sup>Optional</sup> <a name="readDelayMs" id="@cdktf/provider-github.provider.GithubProvider.Initializer.parameter.readDelayMs"></a>

- *Type:* java.lang.Number

Amount of time in milliseconds to sleep in between non-write requests to GitHub API.

Defaults to 0ms if not set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.25.1/docs#read_delay_ms GithubProvider#read_delay_ms}

---

##### `token`<sup>Optional</sup> <a name="token" id="@cdktf/provider-github.provider.GithubProvider.Initializer.parameter.token"></a>

- *Type:* java.lang.String

The OAuth token used to connect to GitHub.

Anonymous mode is enabled if both `token` and `app_auth` are not set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.25.1/docs#token GithubProvider#token}

---

##### `writeDelayMs`<sup>Optional</sup> <a name="writeDelayMs" id="@cdktf/provider-github.provider.GithubProvider.Initializer.parameter.writeDelayMs"></a>

- *Type:* java.lang.Number

Amount of time in milliseconds to sleep in between writes to GitHub API.

Defaults to 1000ms or 1s if not set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.25.1/docs#write_delay_ms GithubProvider#write_delay_ms}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-github.provider.GithubProvider.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-github.provider.GithubProvider.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.provider.GithubProvider.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-github.provider.GithubProvider.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-github.provider.GithubProvider.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.provider.GithubProvider.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-github.provider.GithubProvider.resetAlias">resetAlias</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.provider.GithubProvider.resetAppAuth">resetAppAuth</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.provider.GithubProvider.resetBaseUrl">resetBaseUrl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.provider.GithubProvider.resetInsecure">resetInsecure</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.provider.GithubProvider.resetOrganization">resetOrganization</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.provider.GithubProvider.resetOwner">resetOwner</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.provider.GithubProvider.resetParallelRequests">resetParallelRequests</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.provider.GithubProvider.resetReadDelayMs">resetReadDelayMs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.provider.GithubProvider.resetToken">resetToken</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.provider.GithubProvider.resetWriteDelayMs">resetWriteDelayMs</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-github.provider.GithubProvider.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-github.provider.GithubProvider.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-github.provider.GithubProvider.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-github.provider.GithubProvider.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-github.provider.GithubProvider.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-github.provider.GithubProvider.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-github.provider.GithubProvider.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-github.provider.GithubProvider.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-github.provider.GithubProvider.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `resetAlias` <a name="resetAlias" id="@cdktf/provider-github.provider.GithubProvider.resetAlias"></a>

```java
public void resetAlias()
```

##### `resetAppAuth` <a name="resetAppAuth" id="@cdktf/provider-github.provider.GithubProvider.resetAppAuth"></a>

```java
public void resetAppAuth()
```

##### `resetBaseUrl` <a name="resetBaseUrl" id="@cdktf/provider-github.provider.GithubProvider.resetBaseUrl"></a>

```java
public void resetBaseUrl()
```

##### `resetInsecure` <a name="resetInsecure" id="@cdktf/provider-github.provider.GithubProvider.resetInsecure"></a>

```java
public void resetInsecure()
```

##### `resetOrganization` <a name="resetOrganization" id="@cdktf/provider-github.provider.GithubProvider.resetOrganization"></a>

```java
public void resetOrganization()
```

##### `resetOwner` <a name="resetOwner" id="@cdktf/provider-github.provider.GithubProvider.resetOwner"></a>

```java
public void resetOwner()
```

##### `resetParallelRequests` <a name="resetParallelRequests" id="@cdktf/provider-github.provider.GithubProvider.resetParallelRequests"></a>

```java
public void resetParallelRequests()
```

##### `resetReadDelayMs` <a name="resetReadDelayMs" id="@cdktf/provider-github.provider.GithubProvider.resetReadDelayMs"></a>

```java
public void resetReadDelayMs()
```

##### `resetToken` <a name="resetToken" id="@cdktf/provider-github.provider.GithubProvider.resetToken"></a>

```java
public void resetToken()
```

##### `resetWriteDelayMs` <a name="resetWriteDelayMs" id="@cdktf/provider-github.provider.GithubProvider.resetWriteDelayMs"></a>

```java
public void resetWriteDelayMs()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-github.provider.GithubProvider.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-github.provider.GithubProvider.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.provider.GithubProvider.isTerraformProvider">isTerraformProvider</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-github.provider.GithubProvider.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.github.provider.GithubProvider;

GithubProvider.isConstruct(java.lang.Object x)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-github.provider.GithubProvider.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-github.provider.GithubProvider.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.github.provider.GithubProvider;

GithubProvider.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-github.provider.GithubProvider.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformProvider` <a name="isTerraformProvider" id="@cdktf/provider-github.provider.GithubProvider.isTerraformProvider"></a>

```java
import com.hashicorp.cdktf.providers.github.provider.GithubProvider;

GithubProvider.isTerraformProvider(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-github.provider.GithubProvider.isTerraformProvider.parameter.x"></a>

- *Type:* java.lang.Object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.provider.GithubProvider.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-github.provider.GithubProvider.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.provider.GithubProvider.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.provider.GithubProvider.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.provider.GithubProvider.property.metaAttributes">metaAttributes</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.provider.GithubProvider.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.provider.GithubProvider.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.provider.GithubProvider.property.terraformProviderSource">terraformProviderSource</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.provider.GithubProvider.property.alias">alias</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.provider.GithubProvider.property.aliasInput">aliasInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.provider.GithubProvider.property.appAuthInput">appAuthInput</a></code> | <code><a href="#@cdktf/provider-github.provider.GithubProviderAppAuth">GithubProviderAppAuth</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.provider.GithubProvider.property.baseUrlInput">baseUrlInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.provider.GithubProvider.property.insecureInput">insecureInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.provider.GithubProvider.property.organizationInput">organizationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.provider.GithubProvider.property.ownerInput">ownerInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.provider.GithubProvider.property.parallelRequestsInput">parallelRequestsInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.provider.GithubProvider.property.readDelayMsInput">readDelayMsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.provider.GithubProvider.property.tokenInput">tokenInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.provider.GithubProvider.property.writeDelayMsInput">writeDelayMsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.provider.GithubProvider.property.appAuth">appAuth</a></code> | <code><a href="#@cdktf/provider-github.provider.GithubProviderAppAuth">GithubProviderAppAuth</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.provider.GithubProvider.property.baseUrl">baseUrl</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.provider.GithubProvider.property.insecure">insecure</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.provider.GithubProvider.property.organization">organization</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.provider.GithubProvider.property.owner">owner</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.provider.GithubProvider.property.parallelRequests">parallelRequests</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.provider.GithubProvider.property.readDelayMs">readDelayMs</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.provider.GithubProvider.property.token">token</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.provider.GithubProvider.property.writeDelayMs">writeDelayMs</a></code> | <code>java.lang.Number</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-github.provider.GithubProvider.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-github.provider.GithubProvider.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-github.provider.GithubProvider.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-github.provider.GithubProvider.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `metaAttributes`<sup>Required</sup> <a name="metaAttributes" id="@cdktf/provider-github.provider.GithubProvider.property.metaAttributes"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getMetaAttributes();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-github.provider.GithubProvider.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-github.provider.GithubProvider.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `terraformProviderSource`<sup>Optional</sup> <a name="terraformProviderSource" id="@cdktf/provider-github.provider.GithubProvider.property.terraformProviderSource"></a>

```java
public java.lang.String getTerraformProviderSource();
```

- *Type:* java.lang.String

---

##### `alias`<sup>Optional</sup> <a name="alias" id="@cdktf/provider-github.provider.GithubProvider.property.alias"></a>

```java
public java.lang.String getAlias();
```

- *Type:* java.lang.String

---

##### `aliasInput`<sup>Optional</sup> <a name="aliasInput" id="@cdktf/provider-github.provider.GithubProvider.property.aliasInput"></a>

```java
public java.lang.String getAliasInput();
```

- *Type:* java.lang.String

---

##### `appAuthInput`<sup>Optional</sup> <a name="appAuthInput" id="@cdktf/provider-github.provider.GithubProvider.property.appAuthInput"></a>

```java
public GithubProviderAppAuth getAppAuthInput();
```

- *Type:* <a href="#@cdktf/provider-github.provider.GithubProviderAppAuth">GithubProviderAppAuth</a>

---

##### `baseUrlInput`<sup>Optional</sup> <a name="baseUrlInput" id="@cdktf/provider-github.provider.GithubProvider.property.baseUrlInput"></a>

```java
public java.lang.String getBaseUrlInput();
```

- *Type:* java.lang.String

---

##### `insecureInput`<sup>Optional</sup> <a name="insecureInput" id="@cdktf/provider-github.provider.GithubProvider.property.insecureInput"></a>

```java
public java.lang.Object getInsecureInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `organizationInput`<sup>Optional</sup> <a name="organizationInput" id="@cdktf/provider-github.provider.GithubProvider.property.organizationInput"></a>

```java
public java.lang.String getOrganizationInput();
```

- *Type:* java.lang.String

---

##### `ownerInput`<sup>Optional</sup> <a name="ownerInput" id="@cdktf/provider-github.provider.GithubProvider.property.ownerInput"></a>

```java
public java.lang.String getOwnerInput();
```

- *Type:* java.lang.String

---

##### `parallelRequestsInput`<sup>Optional</sup> <a name="parallelRequestsInput" id="@cdktf/provider-github.provider.GithubProvider.property.parallelRequestsInput"></a>

```java
public java.lang.Object getParallelRequestsInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `readDelayMsInput`<sup>Optional</sup> <a name="readDelayMsInput" id="@cdktf/provider-github.provider.GithubProvider.property.readDelayMsInput"></a>

```java
public java.lang.Number getReadDelayMsInput();
```

- *Type:* java.lang.Number

---

##### `tokenInput`<sup>Optional</sup> <a name="tokenInput" id="@cdktf/provider-github.provider.GithubProvider.property.tokenInput"></a>

```java
public java.lang.String getTokenInput();
```

- *Type:* java.lang.String

---

##### `writeDelayMsInput`<sup>Optional</sup> <a name="writeDelayMsInput" id="@cdktf/provider-github.provider.GithubProvider.property.writeDelayMsInput"></a>

```java
public java.lang.Number getWriteDelayMsInput();
```

- *Type:* java.lang.Number

---

##### `appAuth`<sup>Optional</sup> <a name="appAuth" id="@cdktf/provider-github.provider.GithubProvider.property.appAuth"></a>

```java
public GithubProviderAppAuth getAppAuth();
```

- *Type:* <a href="#@cdktf/provider-github.provider.GithubProviderAppAuth">GithubProviderAppAuth</a>

---

##### `baseUrl`<sup>Optional</sup> <a name="baseUrl" id="@cdktf/provider-github.provider.GithubProvider.property.baseUrl"></a>

```java
public java.lang.String getBaseUrl();
```

- *Type:* java.lang.String

---

##### `insecure`<sup>Optional</sup> <a name="insecure" id="@cdktf/provider-github.provider.GithubProvider.property.insecure"></a>

```java
public java.lang.Object getInsecure();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `organization`<sup>Optional</sup> <a name="organization" id="@cdktf/provider-github.provider.GithubProvider.property.organization"></a>

```java
public java.lang.String getOrganization();
```

- *Type:* java.lang.String

---

##### `owner`<sup>Optional</sup> <a name="owner" id="@cdktf/provider-github.provider.GithubProvider.property.owner"></a>

```java
public java.lang.String getOwner();
```

- *Type:* java.lang.String

---

##### `parallelRequests`<sup>Optional</sup> <a name="parallelRequests" id="@cdktf/provider-github.provider.GithubProvider.property.parallelRequests"></a>

```java
public java.lang.Object getParallelRequests();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `readDelayMs`<sup>Optional</sup> <a name="readDelayMs" id="@cdktf/provider-github.provider.GithubProvider.property.readDelayMs"></a>

```java
public java.lang.Number getReadDelayMs();
```

- *Type:* java.lang.Number

---

##### `token`<sup>Optional</sup> <a name="token" id="@cdktf/provider-github.provider.GithubProvider.property.token"></a>

```java
public java.lang.String getToken();
```

- *Type:* java.lang.String

---

##### `writeDelayMs`<sup>Optional</sup> <a name="writeDelayMs" id="@cdktf/provider-github.provider.GithubProvider.property.writeDelayMs"></a>

```java
public java.lang.Number getWriteDelayMs();
```

- *Type:* java.lang.Number

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.provider.GithubProvider.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-github.provider.GithubProvider.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### GithubProviderAppAuth <a name="GithubProviderAppAuth" id="@cdktf/provider-github.provider.GithubProviderAppAuth"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-github.provider.GithubProviderAppAuth.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.github.provider.GithubProviderAppAuth;

GithubProviderAppAuth.builder()
    .id(java.lang.String)
    .installationId(java.lang.String)
    .pemFile(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.provider.GithubProviderAppAuth.property.id">id</a></code> | <code>java.lang.String</code> | The GitHub App ID. |
| <code><a href="#@cdktf/provider-github.provider.GithubProviderAppAuth.property.installationId">installationId</a></code> | <code>java.lang.String</code> | The GitHub App installation instance ID. |
| <code><a href="#@cdktf/provider-github.provider.GithubProviderAppAuth.property.pemFile">pemFile</a></code> | <code>java.lang.String</code> | The GitHub App PEM file contents. |

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-github.provider.GithubProviderAppAuth.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

The GitHub App ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.25.1/docs#id GithubProvider#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `installationId`<sup>Required</sup> <a name="installationId" id="@cdktf/provider-github.provider.GithubProviderAppAuth.property.installationId"></a>

```java
public java.lang.String getInstallationId();
```

- *Type:* java.lang.String

The GitHub App installation instance ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.25.1/docs#installation_id GithubProvider#installation_id}

---

##### `pemFile`<sup>Required</sup> <a name="pemFile" id="@cdktf/provider-github.provider.GithubProviderAppAuth.property.pemFile"></a>

```java
public java.lang.String getPemFile();
```

- *Type:* java.lang.String

The GitHub App PEM file contents.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.25.1/docs#pem_file GithubProvider#pem_file}

---

### GithubProviderConfig <a name="GithubProviderConfig" id="@cdktf/provider-github.provider.GithubProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-github.provider.GithubProviderConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.github.provider.GithubProviderConfig;

GithubProviderConfig.builder()
//  .alias(java.lang.String)
//  .appAuth(GithubProviderAppAuth)
//  .baseUrl(java.lang.String)
//  .insecure(java.lang.Boolean)
//  .insecure(IResolvable)
//  .organization(java.lang.String)
//  .owner(java.lang.String)
//  .parallelRequests(java.lang.Boolean)
//  .parallelRequests(IResolvable)
//  .readDelayMs(java.lang.Number)
//  .token(java.lang.String)
//  .writeDelayMs(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.provider.GithubProviderConfig.property.alias">alias</a></code> | <code>java.lang.String</code> | Alias name. |
| <code><a href="#@cdktf/provider-github.provider.GithubProviderConfig.property.appAuth">appAuth</a></code> | <code><a href="#@cdktf/provider-github.provider.GithubProviderAppAuth">GithubProviderAppAuth</a></code> | app_auth block. |
| <code><a href="#@cdktf/provider-github.provider.GithubProviderConfig.property.baseUrl">baseUrl</a></code> | <code>java.lang.String</code> | The GitHub Base API URL. |
| <code><a href="#@cdktf/provider-github.provider.GithubProviderConfig.property.insecure">insecure</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Enable `insecure` mode for testing purposes. |
| <code><a href="#@cdktf/provider-github.provider.GithubProviderConfig.property.organization">organization</a></code> | <code>java.lang.String</code> | The GitHub organization name to manage. Use this field instead of `owner` when managing organization accounts. |
| <code><a href="#@cdktf/provider-github.provider.GithubProviderConfig.property.owner">owner</a></code> | <code>java.lang.String</code> | The GitHub owner name to manage. Use this field instead of `organization` when managing individual accounts. |
| <code><a href="#@cdktf/provider-github.provider.GithubProviderConfig.property.parallelRequests">parallelRequests</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Allow the provider to make parallel API calls to GitHub. |
| <code><a href="#@cdktf/provider-github.provider.GithubProviderConfig.property.readDelayMs">readDelayMs</a></code> | <code>java.lang.Number</code> | Amount of time in milliseconds to sleep in between non-write requests to GitHub API. |
| <code><a href="#@cdktf/provider-github.provider.GithubProviderConfig.property.token">token</a></code> | <code>java.lang.String</code> | The OAuth token used to connect to GitHub. |
| <code><a href="#@cdktf/provider-github.provider.GithubProviderConfig.property.writeDelayMs">writeDelayMs</a></code> | <code>java.lang.Number</code> | Amount of time in milliseconds to sleep in between writes to GitHub API. |

---

##### `alias`<sup>Optional</sup> <a name="alias" id="@cdktf/provider-github.provider.GithubProviderConfig.property.alias"></a>

```java
public java.lang.String getAlias();
```

- *Type:* java.lang.String

Alias name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.25.1/docs#alias GithubProvider#alias}

---

##### `appAuth`<sup>Optional</sup> <a name="appAuth" id="@cdktf/provider-github.provider.GithubProviderConfig.property.appAuth"></a>

```java
public GithubProviderAppAuth getAppAuth();
```

- *Type:* <a href="#@cdktf/provider-github.provider.GithubProviderAppAuth">GithubProviderAppAuth</a>

app_auth block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.25.1/docs#app_auth GithubProvider#app_auth}

---

##### `baseUrl`<sup>Optional</sup> <a name="baseUrl" id="@cdktf/provider-github.provider.GithubProviderConfig.property.baseUrl"></a>

```java
public java.lang.String getBaseUrl();
```

- *Type:* java.lang.String

The GitHub Base API URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.25.1/docs#base_url GithubProvider#base_url}

---

##### `insecure`<sup>Optional</sup> <a name="insecure" id="@cdktf/provider-github.provider.GithubProviderConfig.property.insecure"></a>

```java
public java.lang.Object getInsecure();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Enable `insecure` mode for testing purposes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.25.1/docs#insecure GithubProvider#insecure}

---

##### `organization`<sup>Optional</sup> <a name="organization" id="@cdktf/provider-github.provider.GithubProviderConfig.property.organization"></a>

```java
public java.lang.String getOrganization();
```

- *Type:* java.lang.String

The GitHub organization name to manage. Use this field instead of `owner` when managing organization accounts.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.25.1/docs#organization GithubProvider#organization}

---

##### `owner`<sup>Optional</sup> <a name="owner" id="@cdktf/provider-github.provider.GithubProviderConfig.property.owner"></a>

```java
public java.lang.String getOwner();
```

- *Type:* java.lang.String

The GitHub owner name to manage. Use this field instead of `organization` when managing individual accounts.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.25.1/docs#owner GithubProvider#owner}

---

##### `parallelRequests`<sup>Optional</sup> <a name="parallelRequests" id="@cdktf/provider-github.provider.GithubProviderConfig.property.parallelRequests"></a>

```java
public java.lang.Object getParallelRequests();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Allow the provider to make parallel API calls to GitHub.

You may want to set it to true when you have a private Github Enterprise without strict rate limits. Although, it is not possible to enable this setting on github.com because we enforce the respect of github.com's best practices to avoid hitting abuse rate limitsDefaults to false if not set

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.25.1/docs#parallel_requests GithubProvider#parallel_requests}

---

##### `readDelayMs`<sup>Optional</sup> <a name="readDelayMs" id="@cdktf/provider-github.provider.GithubProviderConfig.property.readDelayMs"></a>

```java
public java.lang.Number getReadDelayMs();
```

- *Type:* java.lang.Number

Amount of time in milliseconds to sleep in between non-write requests to GitHub API.

Defaults to 0ms if not set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.25.1/docs#read_delay_ms GithubProvider#read_delay_ms}

---

##### `token`<sup>Optional</sup> <a name="token" id="@cdktf/provider-github.provider.GithubProviderConfig.property.token"></a>

```java
public java.lang.String getToken();
```

- *Type:* java.lang.String

The OAuth token used to connect to GitHub.

Anonymous mode is enabled if both `token` and `app_auth` are not set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.25.1/docs#token GithubProvider#token}

---

##### `writeDelayMs`<sup>Optional</sup> <a name="writeDelayMs" id="@cdktf/provider-github.provider.GithubProviderConfig.property.writeDelayMs"></a>

```java
public java.lang.Number getWriteDelayMs();
```

- *Type:* java.lang.Number

Amount of time in milliseconds to sleep in between writes to GitHub API.

Defaults to 1000ms or 1s if not set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.25.1/docs#write_delay_ms GithubProvider#write_delay_ms}

---



