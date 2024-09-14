# `provider` Submodule <a name="`provider` Submodule" id="@cdktf/provider-github.provider"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GithubProvider <a name="GithubProvider" id="@cdktf/provider-github.provider.GithubProvider"></a>

Represents a {@link https://registry.terraform.io/providers/integrations/github/6.3.0/docs github}.

#### Initializers <a name="Initializers" id="@cdktf/provider-github.provider.GithubProvider.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Github;

new GithubProvider(Construct Scope, string Id, GithubProviderConfig Config = null);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.provider.GithubProvider.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-github.provider.GithubProvider.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-github.provider.GithubProvider.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-github.provider.GithubProviderConfig">GithubProviderConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-github.provider.GithubProvider.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-github.provider.GithubProvider.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Optional</sup> <a name="Config" id="@cdktf/provider-github.provider.GithubProvider.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-github.provider.GithubProviderConfig">GithubProviderConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-github.provider.GithubProvider.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-github.provider.GithubProvider.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.provider.GithubProvider.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-github.provider.GithubProvider.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-github.provider.GithubProvider.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.provider.GithubProvider.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.provider.GithubProvider.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-github.provider.GithubProvider.resetAlias">ResetAlias</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.provider.GithubProvider.resetAppAuth">ResetAppAuth</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.provider.GithubProvider.resetBaseUrl">ResetBaseUrl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.provider.GithubProvider.resetInsecure">ResetInsecure</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.provider.GithubProvider.resetMaxRetries">ResetMaxRetries</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.provider.GithubProvider.resetOrganization">ResetOrganization</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.provider.GithubProvider.resetOwner">ResetOwner</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.provider.GithubProvider.resetParallelRequests">ResetParallelRequests</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.provider.GithubProvider.resetReadDelayMs">ResetReadDelayMs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.provider.GithubProvider.resetRetryableErrors">ResetRetryableErrors</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.provider.GithubProvider.resetRetryDelayMs">ResetRetryDelayMs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.provider.GithubProvider.resetToken">ResetToken</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.provider.GithubProvider.resetWriteDelayMs">ResetWriteDelayMs</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-github.provider.GithubProvider.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-github.provider.GithubProvider.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-github.provider.GithubProvider.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-github.provider.GithubProvider.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-github.provider.GithubProvider.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-github.provider.GithubProvider.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-github.provider.GithubProvider.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-github.provider.GithubProvider.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-github.provider.GithubProvider.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-github.provider.GithubProvider.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `ResetAlias` <a name="ResetAlias" id="@cdktf/provider-github.provider.GithubProvider.resetAlias"></a>

```csharp
private void ResetAlias()
```

##### `ResetAppAuth` <a name="ResetAppAuth" id="@cdktf/provider-github.provider.GithubProvider.resetAppAuth"></a>

```csharp
private void ResetAppAuth()
```

##### `ResetBaseUrl` <a name="ResetBaseUrl" id="@cdktf/provider-github.provider.GithubProvider.resetBaseUrl"></a>

```csharp
private void ResetBaseUrl()
```

##### `ResetInsecure` <a name="ResetInsecure" id="@cdktf/provider-github.provider.GithubProvider.resetInsecure"></a>

```csharp
private void ResetInsecure()
```

##### `ResetMaxRetries` <a name="ResetMaxRetries" id="@cdktf/provider-github.provider.GithubProvider.resetMaxRetries"></a>

```csharp
private void ResetMaxRetries()
```

##### `ResetOrganization` <a name="ResetOrganization" id="@cdktf/provider-github.provider.GithubProvider.resetOrganization"></a>

```csharp
private void ResetOrganization()
```

##### `ResetOwner` <a name="ResetOwner" id="@cdktf/provider-github.provider.GithubProvider.resetOwner"></a>

```csharp
private void ResetOwner()
```

##### `ResetParallelRequests` <a name="ResetParallelRequests" id="@cdktf/provider-github.provider.GithubProvider.resetParallelRequests"></a>

```csharp
private void ResetParallelRequests()
```

##### `ResetReadDelayMs` <a name="ResetReadDelayMs" id="@cdktf/provider-github.provider.GithubProvider.resetReadDelayMs"></a>

```csharp
private void ResetReadDelayMs()
```

##### `ResetRetryableErrors` <a name="ResetRetryableErrors" id="@cdktf/provider-github.provider.GithubProvider.resetRetryableErrors"></a>

```csharp
private void ResetRetryableErrors()
```

##### `ResetRetryDelayMs` <a name="ResetRetryDelayMs" id="@cdktf/provider-github.provider.GithubProvider.resetRetryDelayMs"></a>

```csharp
private void ResetRetryDelayMs()
```

##### `ResetToken` <a name="ResetToken" id="@cdktf/provider-github.provider.GithubProvider.resetToken"></a>

```csharp
private void ResetToken()
```

##### `ResetWriteDelayMs` <a name="ResetWriteDelayMs" id="@cdktf/provider-github.provider.GithubProvider.resetWriteDelayMs"></a>

```csharp
private void ResetWriteDelayMs()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-github.provider.GithubProvider.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-github.provider.GithubProvider.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.provider.GithubProvider.isTerraformProvider">IsTerraformProvider</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.provider.GithubProvider.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a GithubProvider resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-github.provider.GithubProvider.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Github;

GithubProvider.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-github.provider.GithubProvider.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-github.provider.GithubProvider.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Github;

GithubProvider.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-github.provider.GithubProvider.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformProvider` <a name="IsTerraformProvider" id="@cdktf/provider-github.provider.GithubProvider.isTerraformProvider"></a>

```csharp
using HashiCorp.Cdktf.Providers.Github;

GithubProvider.IsTerraformProvider(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-github.provider.GithubProvider.isTerraformProvider.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-github.provider.GithubProvider.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Github;

GithubProvider.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a GithubProvider resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-github.provider.GithubProvider.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-github.provider.GithubProvider.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GithubProvider to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-github.provider.GithubProvider.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GithubProvider that should be imported.

Refer to the {@link https://registry.terraform.io/providers/integrations/github/6.3.0/docs#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-github.provider.GithubProvider.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the GithubProvider to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.provider.GithubProvider.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-github.provider.GithubProvider.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.provider.GithubProvider.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.provider.GithubProvider.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.provider.GithubProvider.property.metaAttributes">MetaAttributes</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.provider.GithubProvider.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.provider.GithubProvider.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.provider.GithubProvider.property.terraformProviderSource">TerraformProviderSource</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.provider.GithubProvider.property.alias">Alias</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.provider.GithubProvider.property.aliasInput">AliasInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.provider.GithubProvider.property.appAuthInput">AppAuthInput</a></code> | <code><a href="#@cdktf/provider-github.provider.GithubProviderAppAuth">GithubProviderAppAuth</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.provider.GithubProvider.property.baseUrlInput">BaseUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.provider.GithubProvider.property.insecureInput">InsecureInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.provider.GithubProvider.property.maxRetriesInput">MaxRetriesInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.provider.GithubProvider.property.organizationInput">OrganizationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.provider.GithubProvider.property.ownerInput">OwnerInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.provider.GithubProvider.property.parallelRequestsInput">ParallelRequestsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.provider.GithubProvider.property.readDelayMsInput">ReadDelayMsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.provider.GithubProvider.property.retryableErrorsInput">RetryableErrorsInput</a></code> | <code>double[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.provider.GithubProvider.property.retryDelayMsInput">RetryDelayMsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.provider.GithubProvider.property.tokenInput">TokenInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.provider.GithubProvider.property.writeDelayMsInput">WriteDelayMsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.provider.GithubProvider.property.appAuth">AppAuth</a></code> | <code><a href="#@cdktf/provider-github.provider.GithubProviderAppAuth">GithubProviderAppAuth</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.provider.GithubProvider.property.baseUrl">BaseUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.provider.GithubProvider.property.insecure">Insecure</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.provider.GithubProvider.property.maxRetries">MaxRetries</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.provider.GithubProvider.property.organization">Organization</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.provider.GithubProvider.property.owner">Owner</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.provider.GithubProvider.property.parallelRequests">ParallelRequests</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.provider.GithubProvider.property.readDelayMs">ReadDelayMs</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.provider.GithubProvider.property.retryableErrors">RetryableErrors</a></code> | <code>double[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.provider.GithubProvider.property.retryDelayMs">RetryDelayMs</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.provider.GithubProvider.property.token">Token</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.provider.GithubProvider.property.writeDelayMs">WriteDelayMs</a></code> | <code>double</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-github.provider.GithubProvider.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-github.provider.GithubProvider.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-github.provider.GithubProvider.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-github.provider.GithubProvider.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `MetaAttributes`<sup>Required</sup> <a name="MetaAttributes" id="@cdktf/provider-github.provider.GithubProvider.property.metaAttributes"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> MetaAttributes { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-github.provider.GithubProvider.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-github.provider.GithubProvider.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `TerraformProviderSource`<sup>Optional</sup> <a name="TerraformProviderSource" id="@cdktf/provider-github.provider.GithubProvider.property.terraformProviderSource"></a>

```csharp
public string TerraformProviderSource { get; }
```

- *Type:* string

---

##### `Alias`<sup>Optional</sup> <a name="Alias" id="@cdktf/provider-github.provider.GithubProvider.property.alias"></a>

```csharp
public string Alias { get; }
```

- *Type:* string

---

##### `AliasInput`<sup>Optional</sup> <a name="AliasInput" id="@cdktf/provider-github.provider.GithubProvider.property.aliasInput"></a>

```csharp
public string AliasInput { get; }
```

- *Type:* string

---

##### `AppAuthInput`<sup>Optional</sup> <a name="AppAuthInput" id="@cdktf/provider-github.provider.GithubProvider.property.appAuthInput"></a>

```csharp
public GithubProviderAppAuth AppAuthInput { get; }
```

- *Type:* <a href="#@cdktf/provider-github.provider.GithubProviderAppAuth">GithubProviderAppAuth</a>

---

##### `BaseUrlInput`<sup>Optional</sup> <a name="BaseUrlInput" id="@cdktf/provider-github.provider.GithubProvider.property.baseUrlInput"></a>

```csharp
public string BaseUrlInput { get; }
```

- *Type:* string

---

##### `InsecureInput`<sup>Optional</sup> <a name="InsecureInput" id="@cdktf/provider-github.provider.GithubProvider.property.insecureInput"></a>

```csharp
public object InsecureInput { get; }
```

- *Type:* object

---

##### `MaxRetriesInput`<sup>Optional</sup> <a name="MaxRetriesInput" id="@cdktf/provider-github.provider.GithubProvider.property.maxRetriesInput"></a>

```csharp
public double MaxRetriesInput { get; }
```

- *Type:* double

---

##### `OrganizationInput`<sup>Optional</sup> <a name="OrganizationInput" id="@cdktf/provider-github.provider.GithubProvider.property.organizationInput"></a>

```csharp
public string OrganizationInput { get; }
```

- *Type:* string

---

##### `OwnerInput`<sup>Optional</sup> <a name="OwnerInput" id="@cdktf/provider-github.provider.GithubProvider.property.ownerInput"></a>

```csharp
public string OwnerInput { get; }
```

- *Type:* string

---

##### `ParallelRequestsInput`<sup>Optional</sup> <a name="ParallelRequestsInput" id="@cdktf/provider-github.provider.GithubProvider.property.parallelRequestsInput"></a>

```csharp
public object ParallelRequestsInput { get; }
```

- *Type:* object

---

##### `ReadDelayMsInput`<sup>Optional</sup> <a name="ReadDelayMsInput" id="@cdktf/provider-github.provider.GithubProvider.property.readDelayMsInput"></a>

```csharp
public double ReadDelayMsInput { get; }
```

- *Type:* double

---

##### `RetryableErrorsInput`<sup>Optional</sup> <a name="RetryableErrorsInput" id="@cdktf/provider-github.provider.GithubProvider.property.retryableErrorsInput"></a>

```csharp
public double[] RetryableErrorsInput { get; }
```

- *Type:* double[]

---

##### `RetryDelayMsInput`<sup>Optional</sup> <a name="RetryDelayMsInput" id="@cdktf/provider-github.provider.GithubProvider.property.retryDelayMsInput"></a>

```csharp
public double RetryDelayMsInput { get; }
```

- *Type:* double

---

##### `TokenInput`<sup>Optional</sup> <a name="TokenInput" id="@cdktf/provider-github.provider.GithubProvider.property.tokenInput"></a>

```csharp
public string TokenInput { get; }
```

- *Type:* string

---

##### `WriteDelayMsInput`<sup>Optional</sup> <a name="WriteDelayMsInput" id="@cdktf/provider-github.provider.GithubProvider.property.writeDelayMsInput"></a>

```csharp
public double WriteDelayMsInput { get; }
```

- *Type:* double

---

##### `AppAuth`<sup>Optional</sup> <a name="AppAuth" id="@cdktf/provider-github.provider.GithubProvider.property.appAuth"></a>

```csharp
public GithubProviderAppAuth AppAuth { get; }
```

- *Type:* <a href="#@cdktf/provider-github.provider.GithubProviderAppAuth">GithubProviderAppAuth</a>

---

##### `BaseUrl`<sup>Optional</sup> <a name="BaseUrl" id="@cdktf/provider-github.provider.GithubProvider.property.baseUrl"></a>

```csharp
public string BaseUrl { get; }
```

- *Type:* string

---

##### `Insecure`<sup>Optional</sup> <a name="Insecure" id="@cdktf/provider-github.provider.GithubProvider.property.insecure"></a>

```csharp
public object Insecure { get; }
```

- *Type:* object

---

##### `MaxRetries`<sup>Optional</sup> <a name="MaxRetries" id="@cdktf/provider-github.provider.GithubProvider.property.maxRetries"></a>

```csharp
public double MaxRetries { get; }
```

- *Type:* double

---

##### `Organization`<sup>Optional</sup> <a name="Organization" id="@cdktf/provider-github.provider.GithubProvider.property.organization"></a>

```csharp
public string Organization { get; }
```

- *Type:* string

---

##### `Owner`<sup>Optional</sup> <a name="Owner" id="@cdktf/provider-github.provider.GithubProvider.property.owner"></a>

```csharp
public string Owner { get; }
```

- *Type:* string

---

##### `ParallelRequests`<sup>Optional</sup> <a name="ParallelRequests" id="@cdktf/provider-github.provider.GithubProvider.property.parallelRequests"></a>

```csharp
public object ParallelRequests { get; }
```

- *Type:* object

---

##### `ReadDelayMs`<sup>Optional</sup> <a name="ReadDelayMs" id="@cdktf/provider-github.provider.GithubProvider.property.readDelayMs"></a>

```csharp
public double ReadDelayMs { get; }
```

- *Type:* double

---

##### `RetryableErrors`<sup>Optional</sup> <a name="RetryableErrors" id="@cdktf/provider-github.provider.GithubProvider.property.retryableErrors"></a>

```csharp
public double[] RetryableErrors { get; }
```

- *Type:* double[]

---

##### `RetryDelayMs`<sup>Optional</sup> <a name="RetryDelayMs" id="@cdktf/provider-github.provider.GithubProvider.property.retryDelayMs"></a>

```csharp
public double RetryDelayMs { get; }
```

- *Type:* double

---

##### `Token`<sup>Optional</sup> <a name="Token" id="@cdktf/provider-github.provider.GithubProvider.property.token"></a>

```csharp
public string Token { get; }
```

- *Type:* string

---

##### `WriteDelayMs`<sup>Optional</sup> <a name="WriteDelayMs" id="@cdktf/provider-github.provider.GithubProvider.property.writeDelayMs"></a>

```csharp
public double WriteDelayMs { get; }
```

- *Type:* double

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.provider.GithubProvider.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-github.provider.GithubProvider.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GithubProviderAppAuth <a name="GithubProviderAppAuth" id="@cdktf/provider-github.provider.GithubProviderAppAuth"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-github.provider.GithubProviderAppAuth.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Github;

new GithubProviderAppAuth {
    string Id,
    string InstallationId,
    string PemFile
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.provider.GithubProviderAppAuth.property.id">Id</a></code> | <code>string</code> | The GitHub App ID. |
| <code><a href="#@cdktf/provider-github.provider.GithubProviderAppAuth.property.installationId">InstallationId</a></code> | <code>string</code> | The GitHub App installation instance ID. |
| <code><a href="#@cdktf/provider-github.provider.GithubProviderAppAuth.property.pemFile">PemFile</a></code> | <code>string</code> | The GitHub App PEM file contents. |

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-github.provider.GithubProviderAppAuth.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

The GitHub App ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.3.0/docs#id GithubProvider#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `InstallationId`<sup>Required</sup> <a name="InstallationId" id="@cdktf/provider-github.provider.GithubProviderAppAuth.property.installationId"></a>

```csharp
public string InstallationId { get; set; }
```

- *Type:* string

The GitHub App installation instance ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.3.0/docs#installation_id GithubProvider#installation_id}

---

##### `PemFile`<sup>Required</sup> <a name="PemFile" id="@cdktf/provider-github.provider.GithubProviderAppAuth.property.pemFile"></a>

```csharp
public string PemFile { get; set; }
```

- *Type:* string

The GitHub App PEM file contents.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.3.0/docs#pem_file GithubProvider#pem_file}

---

### GithubProviderConfig <a name="GithubProviderConfig" id="@cdktf/provider-github.provider.GithubProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-github.provider.GithubProviderConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Github;

new GithubProviderConfig {
    string Alias = null,
    GithubProviderAppAuth AppAuth = null,
    string BaseUrl = null,
    object Insecure = null,
    double MaxRetries = null,
    string Organization = null,
    string Owner = null,
    object ParallelRequests = null,
    double ReadDelayMs = null,
    double[] RetryableErrors = null,
    double RetryDelayMs = null,
    string Token = null,
    double WriteDelayMs = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.provider.GithubProviderConfig.property.alias">Alias</a></code> | <code>string</code> | Alias name. |
| <code><a href="#@cdktf/provider-github.provider.GithubProviderConfig.property.appAuth">AppAuth</a></code> | <code><a href="#@cdktf/provider-github.provider.GithubProviderAppAuth">GithubProviderAppAuth</a></code> | app_auth block. |
| <code><a href="#@cdktf/provider-github.provider.GithubProviderConfig.property.baseUrl">BaseUrl</a></code> | <code>string</code> | The GitHub Base API URL. |
| <code><a href="#@cdktf/provider-github.provider.GithubProviderConfig.property.insecure">Insecure</a></code> | <code>object</code> | Enable `insecure` mode for testing purposes. |
| <code><a href="#@cdktf/provider-github.provider.GithubProviderConfig.property.maxRetries">MaxRetries</a></code> | <code>double</code> | Number of times to retry a request after receiving an error status codeDefaults to 3. |
| <code><a href="#@cdktf/provider-github.provider.GithubProviderConfig.property.organization">Organization</a></code> | <code>string</code> | The GitHub organization name to manage. Use this field instead of `owner` when managing organization accounts. |
| <code><a href="#@cdktf/provider-github.provider.GithubProviderConfig.property.owner">Owner</a></code> | <code>string</code> | The GitHub owner name to manage. Use this field instead of `organization` when managing individual accounts. |
| <code><a href="#@cdktf/provider-github.provider.GithubProviderConfig.property.parallelRequests">ParallelRequests</a></code> | <code>object</code> | Allow the provider to make parallel API calls to GitHub. |
| <code><a href="#@cdktf/provider-github.provider.GithubProviderConfig.property.readDelayMs">ReadDelayMs</a></code> | <code>double</code> | Amount of time in milliseconds to sleep in between non-write requests to GitHub API. |
| <code><a href="#@cdktf/provider-github.provider.GithubProviderConfig.property.retryableErrors">RetryableErrors</a></code> | <code>double[]</code> | Allow the provider to retry after receiving an error status code, the max_retries should be set for this to workDefaults to [500, 502, 503, 504]. |
| <code><a href="#@cdktf/provider-github.provider.GithubProviderConfig.property.retryDelayMs">RetryDelayMs</a></code> | <code>double</code> | Amount of time in milliseconds to sleep in between requests to GitHub API after an error response. |
| <code><a href="#@cdktf/provider-github.provider.GithubProviderConfig.property.token">Token</a></code> | <code>string</code> | The OAuth token used to connect to GitHub. |
| <code><a href="#@cdktf/provider-github.provider.GithubProviderConfig.property.writeDelayMs">WriteDelayMs</a></code> | <code>double</code> | Amount of time in milliseconds to sleep in between writes to GitHub API. |

---

##### `Alias`<sup>Optional</sup> <a name="Alias" id="@cdktf/provider-github.provider.GithubProviderConfig.property.alias"></a>

```csharp
public string Alias { get; set; }
```

- *Type:* string

Alias name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.3.0/docs#alias GithubProvider#alias}

---

##### `AppAuth`<sup>Optional</sup> <a name="AppAuth" id="@cdktf/provider-github.provider.GithubProviderConfig.property.appAuth"></a>

```csharp
public GithubProviderAppAuth AppAuth { get; set; }
```

- *Type:* <a href="#@cdktf/provider-github.provider.GithubProviderAppAuth">GithubProviderAppAuth</a>

app_auth block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.3.0/docs#app_auth GithubProvider#app_auth}

---

##### `BaseUrl`<sup>Optional</sup> <a name="BaseUrl" id="@cdktf/provider-github.provider.GithubProviderConfig.property.baseUrl"></a>

```csharp
public string BaseUrl { get; set; }
```

- *Type:* string

The GitHub Base API URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.3.0/docs#base_url GithubProvider#base_url}

---

##### `Insecure`<sup>Optional</sup> <a name="Insecure" id="@cdktf/provider-github.provider.GithubProviderConfig.property.insecure"></a>

```csharp
public object Insecure { get; set; }
```

- *Type:* object

Enable `insecure` mode for testing purposes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.3.0/docs#insecure GithubProvider#insecure}

---

##### `MaxRetries`<sup>Optional</sup> <a name="MaxRetries" id="@cdktf/provider-github.provider.GithubProviderConfig.property.maxRetries"></a>

```csharp
public double MaxRetries { get; set; }
```

- *Type:* double

Number of times to retry a request after receiving an error status codeDefaults to 3.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.3.0/docs#max_retries GithubProvider#max_retries}

---

##### `Organization`<sup>Optional</sup> <a name="Organization" id="@cdktf/provider-github.provider.GithubProviderConfig.property.organization"></a>

```csharp
public string Organization { get; set; }
```

- *Type:* string

The GitHub organization name to manage. Use this field instead of `owner` when managing organization accounts.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.3.0/docs#organization GithubProvider#organization}

---

##### `Owner`<sup>Optional</sup> <a name="Owner" id="@cdktf/provider-github.provider.GithubProviderConfig.property.owner"></a>

```csharp
public string Owner { get; set; }
```

- *Type:* string

The GitHub owner name to manage. Use this field instead of `organization` when managing individual accounts.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.3.0/docs#owner GithubProvider#owner}

---

##### `ParallelRequests`<sup>Optional</sup> <a name="ParallelRequests" id="@cdktf/provider-github.provider.GithubProviderConfig.property.parallelRequests"></a>

```csharp
public object ParallelRequests { get; set; }
```

- *Type:* object

Allow the provider to make parallel API calls to GitHub.

You may want to set it to true when you have a private Github Enterprise without strict rate limits. Although, it is not possible to enable this setting on github.com because we enforce the respect of github.com's best practices to avoid hitting abuse rate limitsDefaults to false if not set

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.3.0/docs#parallel_requests GithubProvider#parallel_requests}

---

##### `ReadDelayMs`<sup>Optional</sup> <a name="ReadDelayMs" id="@cdktf/provider-github.provider.GithubProviderConfig.property.readDelayMs"></a>

```csharp
public double ReadDelayMs { get; set; }
```

- *Type:* double

Amount of time in milliseconds to sleep in between non-write requests to GitHub API.

Defaults to 0ms if not set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.3.0/docs#read_delay_ms GithubProvider#read_delay_ms}

---

##### `RetryableErrors`<sup>Optional</sup> <a name="RetryableErrors" id="@cdktf/provider-github.provider.GithubProviderConfig.property.retryableErrors"></a>

```csharp
public double[] RetryableErrors { get; set; }
```

- *Type:* double[]

Allow the provider to retry after receiving an error status code, the max_retries should be set for this to workDefaults to [500, 502, 503, 504].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.3.0/docs#retryable_errors GithubProvider#retryable_errors}

---

##### `RetryDelayMs`<sup>Optional</sup> <a name="RetryDelayMs" id="@cdktf/provider-github.provider.GithubProviderConfig.property.retryDelayMs"></a>

```csharp
public double RetryDelayMs { get; set; }
```

- *Type:* double

Amount of time in milliseconds to sleep in between requests to GitHub API after an error response.

Defaults to 1000ms or 1s if not set, the max_retries must be set to greater than zero.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.3.0/docs#retry_delay_ms GithubProvider#retry_delay_ms}

---

##### `Token`<sup>Optional</sup> <a name="Token" id="@cdktf/provider-github.provider.GithubProviderConfig.property.token"></a>

```csharp
public string Token { get; set; }
```

- *Type:* string

The OAuth token used to connect to GitHub.

Anonymous mode is enabled if both `token` and `app_auth` are not set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.3.0/docs#token GithubProvider#token}

---

##### `WriteDelayMs`<sup>Optional</sup> <a name="WriteDelayMs" id="@cdktf/provider-github.provider.GithubProviderConfig.property.writeDelayMs"></a>

```csharp
public double WriteDelayMs { get; set; }
```

- *Type:* double

Amount of time in milliseconds to sleep in between writes to GitHub API.

Defaults to 1000ms or 1s if not set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.3.0/docs#write_delay_ms GithubProvider#write_delay_ms}

---



