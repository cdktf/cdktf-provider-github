# `provider` Submodule <a name="`provider` Submodule" id="@cdktf/provider-github.provider"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GithubProvider <a name="GithubProvider" id="@cdktf/provider-github.provider.GithubProvider"></a>

Represents a {@link https://registry.terraform.io/providers/integrations/github/6.6.0/docs github}.

#### Initializers <a name="Initializers" id="@cdktf/provider-github.provider.GithubProvider.Initializer"></a>

```typescript
import { provider } from '@cdktf/provider-github'

new provider.GithubProvider(scope: Construct, id: string, config?: GithubProviderConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.provider.GithubProvider.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-github.provider.GithubProvider.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-github.provider.GithubProvider.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-github.provider.GithubProviderConfig">GithubProviderConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-github.provider.GithubProvider.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-github.provider.GithubProvider.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktf/provider-github.provider.GithubProvider.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-github.provider.GithubProviderConfig">GithubProviderConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-github.provider.GithubProvider.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-github.provider.GithubProvider.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.provider.GithubProvider.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-github.provider.GithubProvider.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-github.provider.GithubProvider.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.provider.GithubProvider.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.provider.GithubProvider.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-github.provider.GithubProvider.resetAlias">resetAlias</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.provider.GithubProvider.resetAppAuth">resetAppAuth</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.provider.GithubProvider.resetBaseUrl">resetBaseUrl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.provider.GithubProvider.resetInsecure">resetInsecure</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.provider.GithubProvider.resetMaxRetries">resetMaxRetries</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.provider.GithubProvider.resetOrganization">resetOrganization</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.provider.GithubProvider.resetOwner">resetOwner</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.provider.GithubProvider.resetParallelRequests">resetParallelRequests</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.provider.GithubProvider.resetReadDelayMs">resetReadDelayMs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.provider.GithubProvider.resetRetryableErrors">resetRetryableErrors</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.provider.GithubProvider.resetRetryDelayMs">resetRetryDelayMs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.provider.GithubProvider.resetToken">resetToken</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.provider.GithubProvider.resetWriteDelayMs">resetWriteDelayMs</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-github.provider.GithubProvider.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-github.provider.GithubProvider.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-github.provider.GithubProvider.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-github.provider.GithubProvider.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-github.provider.GithubProvider.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-github.provider.GithubProvider.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-github.provider.GithubProvider.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-github.provider.GithubProvider.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-github.provider.GithubProvider.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-github.provider.GithubProvider.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `resetAlias` <a name="resetAlias" id="@cdktf/provider-github.provider.GithubProvider.resetAlias"></a>

```typescript
public resetAlias(): void
```

##### `resetAppAuth` <a name="resetAppAuth" id="@cdktf/provider-github.provider.GithubProvider.resetAppAuth"></a>

```typescript
public resetAppAuth(): void
```

##### `resetBaseUrl` <a name="resetBaseUrl" id="@cdktf/provider-github.provider.GithubProvider.resetBaseUrl"></a>

```typescript
public resetBaseUrl(): void
```

##### `resetInsecure` <a name="resetInsecure" id="@cdktf/provider-github.provider.GithubProvider.resetInsecure"></a>

```typescript
public resetInsecure(): void
```

##### `resetMaxRetries` <a name="resetMaxRetries" id="@cdktf/provider-github.provider.GithubProvider.resetMaxRetries"></a>

```typescript
public resetMaxRetries(): void
```

##### `resetOrganization` <a name="resetOrganization" id="@cdktf/provider-github.provider.GithubProvider.resetOrganization"></a>

```typescript
public resetOrganization(): void
```

##### `resetOwner` <a name="resetOwner" id="@cdktf/provider-github.provider.GithubProvider.resetOwner"></a>

```typescript
public resetOwner(): void
```

##### `resetParallelRequests` <a name="resetParallelRequests" id="@cdktf/provider-github.provider.GithubProvider.resetParallelRequests"></a>

```typescript
public resetParallelRequests(): void
```

##### `resetReadDelayMs` <a name="resetReadDelayMs" id="@cdktf/provider-github.provider.GithubProvider.resetReadDelayMs"></a>

```typescript
public resetReadDelayMs(): void
```

##### `resetRetryableErrors` <a name="resetRetryableErrors" id="@cdktf/provider-github.provider.GithubProvider.resetRetryableErrors"></a>

```typescript
public resetRetryableErrors(): void
```

##### `resetRetryDelayMs` <a name="resetRetryDelayMs" id="@cdktf/provider-github.provider.GithubProvider.resetRetryDelayMs"></a>

```typescript
public resetRetryDelayMs(): void
```

##### `resetToken` <a name="resetToken" id="@cdktf/provider-github.provider.GithubProvider.resetToken"></a>

```typescript
public resetToken(): void
```

##### `resetWriteDelayMs` <a name="resetWriteDelayMs" id="@cdktf/provider-github.provider.GithubProvider.resetWriteDelayMs"></a>

```typescript
public resetWriteDelayMs(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-github.provider.GithubProvider.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-github.provider.GithubProvider.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.provider.GithubProvider.isTerraformProvider">isTerraformProvider</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.provider.GithubProvider.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a GithubProvider resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-github.provider.GithubProvider.isConstruct"></a>

```typescript
import { provider } from '@cdktf/provider-github'

provider.GithubProvider.isConstruct(x: any)
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

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-github.provider.GithubProvider.isTerraformElement"></a>

```typescript
import { provider } from '@cdktf/provider-github'

provider.GithubProvider.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-github.provider.GithubProvider.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformProvider` <a name="isTerraformProvider" id="@cdktf/provider-github.provider.GithubProvider.isTerraformProvider"></a>

```typescript
import { provider } from '@cdktf/provider-github'

provider.GithubProvider.isTerraformProvider(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-github.provider.GithubProvider.isTerraformProvider.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-github.provider.GithubProvider.generateConfigForImport"></a>

```typescript
import { provider } from '@cdktf/provider-github'

provider.GithubProvider.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a GithubProvider resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-github.provider.GithubProvider.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-github.provider.GithubProvider.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GithubProvider to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-github.provider.GithubProvider.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GithubProvider that should be imported.

Refer to the {@link https://registry.terraform.io/providers/integrations/github/6.6.0/docs#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-github.provider.GithubProvider.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the GithubProvider to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.provider.GithubProvider.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-github.provider.GithubProvider.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.provider.GithubProvider.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.provider.GithubProvider.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.provider.GithubProvider.property.metaAttributes">metaAttributes</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.provider.GithubProvider.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.provider.GithubProvider.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.provider.GithubProvider.property.terraformProviderSource">terraformProviderSource</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.provider.GithubProvider.property.alias">alias</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.provider.GithubProvider.property.aliasInput">aliasInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.provider.GithubProvider.property.appAuthInput">appAuthInput</a></code> | <code><a href="#@cdktf/provider-github.provider.GithubProviderAppAuth">GithubProviderAppAuth</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.provider.GithubProvider.property.baseUrlInput">baseUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.provider.GithubProvider.property.insecureInput">insecureInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.provider.GithubProvider.property.maxRetriesInput">maxRetriesInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.provider.GithubProvider.property.organizationInput">organizationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.provider.GithubProvider.property.ownerInput">ownerInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.provider.GithubProvider.property.parallelRequestsInput">parallelRequestsInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.provider.GithubProvider.property.readDelayMsInput">readDelayMsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.provider.GithubProvider.property.retryableErrorsInput">retryableErrorsInput</a></code> | <code>number[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.provider.GithubProvider.property.retryDelayMsInput">retryDelayMsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.provider.GithubProvider.property.tokenInput">tokenInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.provider.GithubProvider.property.writeDelayMsInput">writeDelayMsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.provider.GithubProvider.property.appAuth">appAuth</a></code> | <code><a href="#@cdktf/provider-github.provider.GithubProviderAppAuth">GithubProviderAppAuth</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.provider.GithubProvider.property.baseUrl">baseUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.provider.GithubProvider.property.insecure">insecure</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.provider.GithubProvider.property.maxRetries">maxRetries</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.provider.GithubProvider.property.organization">organization</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.provider.GithubProvider.property.owner">owner</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.provider.GithubProvider.property.parallelRequests">parallelRequests</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.provider.GithubProvider.property.readDelayMs">readDelayMs</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.provider.GithubProvider.property.retryableErrors">retryableErrors</a></code> | <code>number[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.provider.GithubProvider.property.retryDelayMs">retryDelayMs</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.provider.GithubProvider.property.token">token</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.provider.GithubProvider.property.writeDelayMs">writeDelayMs</a></code> | <code>number</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-github.provider.GithubProvider.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-github.provider.GithubProvider.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-github.provider.GithubProvider.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-github.provider.GithubProvider.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `metaAttributes`<sup>Required</sup> <a name="metaAttributes" id="@cdktf/provider-github.provider.GithubProvider.property.metaAttributes"></a>

```typescript
public readonly metaAttributes: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-github.provider.GithubProvider.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-github.provider.GithubProvider.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `terraformProviderSource`<sup>Optional</sup> <a name="terraformProviderSource" id="@cdktf/provider-github.provider.GithubProvider.property.terraformProviderSource"></a>

```typescript
public readonly terraformProviderSource: string;
```

- *Type:* string

---

##### `alias`<sup>Optional</sup> <a name="alias" id="@cdktf/provider-github.provider.GithubProvider.property.alias"></a>

```typescript
public readonly alias: string;
```

- *Type:* string

---

##### `aliasInput`<sup>Optional</sup> <a name="aliasInput" id="@cdktf/provider-github.provider.GithubProvider.property.aliasInput"></a>

```typescript
public readonly aliasInput: string;
```

- *Type:* string

---

##### `appAuthInput`<sup>Optional</sup> <a name="appAuthInput" id="@cdktf/provider-github.provider.GithubProvider.property.appAuthInput"></a>

```typescript
public readonly appAuthInput: GithubProviderAppAuth;
```

- *Type:* <a href="#@cdktf/provider-github.provider.GithubProviderAppAuth">GithubProviderAppAuth</a>

---

##### `baseUrlInput`<sup>Optional</sup> <a name="baseUrlInput" id="@cdktf/provider-github.provider.GithubProvider.property.baseUrlInput"></a>

```typescript
public readonly baseUrlInput: string;
```

- *Type:* string

---

##### `insecureInput`<sup>Optional</sup> <a name="insecureInput" id="@cdktf/provider-github.provider.GithubProvider.property.insecureInput"></a>

```typescript
public readonly insecureInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `maxRetriesInput`<sup>Optional</sup> <a name="maxRetriesInput" id="@cdktf/provider-github.provider.GithubProvider.property.maxRetriesInput"></a>

```typescript
public readonly maxRetriesInput: number;
```

- *Type:* number

---

##### `organizationInput`<sup>Optional</sup> <a name="organizationInput" id="@cdktf/provider-github.provider.GithubProvider.property.organizationInput"></a>

```typescript
public readonly organizationInput: string;
```

- *Type:* string

---

##### `ownerInput`<sup>Optional</sup> <a name="ownerInput" id="@cdktf/provider-github.provider.GithubProvider.property.ownerInput"></a>

```typescript
public readonly ownerInput: string;
```

- *Type:* string

---

##### `parallelRequestsInput`<sup>Optional</sup> <a name="parallelRequestsInput" id="@cdktf/provider-github.provider.GithubProvider.property.parallelRequestsInput"></a>

```typescript
public readonly parallelRequestsInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `readDelayMsInput`<sup>Optional</sup> <a name="readDelayMsInput" id="@cdktf/provider-github.provider.GithubProvider.property.readDelayMsInput"></a>

```typescript
public readonly readDelayMsInput: number;
```

- *Type:* number

---

##### `retryableErrorsInput`<sup>Optional</sup> <a name="retryableErrorsInput" id="@cdktf/provider-github.provider.GithubProvider.property.retryableErrorsInput"></a>

```typescript
public readonly retryableErrorsInput: number[];
```

- *Type:* number[]

---

##### `retryDelayMsInput`<sup>Optional</sup> <a name="retryDelayMsInput" id="@cdktf/provider-github.provider.GithubProvider.property.retryDelayMsInput"></a>

```typescript
public readonly retryDelayMsInput: number;
```

- *Type:* number

---

##### `tokenInput`<sup>Optional</sup> <a name="tokenInput" id="@cdktf/provider-github.provider.GithubProvider.property.tokenInput"></a>

```typescript
public readonly tokenInput: string;
```

- *Type:* string

---

##### `writeDelayMsInput`<sup>Optional</sup> <a name="writeDelayMsInput" id="@cdktf/provider-github.provider.GithubProvider.property.writeDelayMsInput"></a>

```typescript
public readonly writeDelayMsInput: number;
```

- *Type:* number

---

##### `appAuth`<sup>Optional</sup> <a name="appAuth" id="@cdktf/provider-github.provider.GithubProvider.property.appAuth"></a>

```typescript
public readonly appAuth: GithubProviderAppAuth;
```

- *Type:* <a href="#@cdktf/provider-github.provider.GithubProviderAppAuth">GithubProviderAppAuth</a>

---

##### `baseUrl`<sup>Optional</sup> <a name="baseUrl" id="@cdktf/provider-github.provider.GithubProvider.property.baseUrl"></a>

```typescript
public readonly baseUrl: string;
```

- *Type:* string

---

##### `insecure`<sup>Optional</sup> <a name="insecure" id="@cdktf/provider-github.provider.GithubProvider.property.insecure"></a>

```typescript
public readonly insecure: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `maxRetries`<sup>Optional</sup> <a name="maxRetries" id="@cdktf/provider-github.provider.GithubProvider.property.maxRetries"></a>

```typescript
public readonly maxRetries: number;
```

- *Type:* number

---

##### `organization`<sup>Optional</sup> <a name="organization" id="@cdktf/provider-github.provider.GithubProvider.property.organization"></a>

```typescript
public readonly organization: string;
```

- *Type:* string

---

##### `owner`<sup>Optional</sup> <a name="owner" id="@cdktf/provider-github.provider.GithubProvider.property.owner"></a>

```typescript
public readonly owner: string;
```

- *Type:* string

---

##### `parallelRequests`<sup>Optional</sup> <a name="parallelRequests" id="@cdktf/provider-github.provider.GithubProvider.property.parallelRequests"></a>

```typescript
public readonly parallelRequests: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `readDelayMs`<sup>Optional</sup> <a name="readDelayMs" id="@cdktf/provider-github.provider.GithubProvider.property.readDelayMs"></a>

```typescript
public readonly readDelayMs: number;
```

- *Type:* number

---

##### `retryableErrors`<sup>Optional</sup> <a name="retryableErrors" id="@cdktf/provider-github.provider.GithubProvider.property.retryableErrors"></a>

```typescript
public readonly retryableErrors: number[];
```

- *Type:* number[]

---

##### `retryDelayMs`<sup>Optional</sup> <a name="retryDelayMs" id="@cdktf/provider-github.provider.GithubProvider.property.retryDelayMs"></a>

```typescript
public readonly retryDelayMs: number;
```

- *Type:* number

---

##### `token`<sup>Optional</sup> <a name="token" id="@cdktf/provider-github.provider.GithubProvider.property.token"></a>

```typescript
public readonly token: string;
```

- *Type:* string

---

##### `writeDelayMs`<sup>Optional</sup> <a name="writeDelayMs" id="@cdktf/provider-github.provider.GithubProvider.property.writeDelayMs"></a>

```typescript
public readonly writeDelayMs: number;
```

- *Type:* number

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.provider.GithubProvider.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-github.provider.GithubProvider.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GithubProviderAppAuth <a name="GithubProviderAppAuth" id="@cdktf/provider-github.provider.GithubProviderAppAuth"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-github.provider.GithubProviderAppAuth.Initializer"></a>

```typescript
import { provider } from '@cdktf/provider-github'

const githubProviderAppAuth: provider.GithubProviderAppAuth = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.provider.GithubProviderAppAuth.property.id">id</a></code> | <code>string</code> | The GitHub App ID. |
| <code><a href="#@cdktf/provider-github.provider.GithubProviderAppAuth.property.installationId">installationId</a></code> | <code>string</code> | The GitHub App installation instance ID. |
| <code><a href="#@cdktf/provider-github.provider.GithubProviderAppAuth.property.pemFile">pemFile</a></code> | <code>string</code> | The GitHub App PEM file contents. |

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-github.provider.GithubProviderAppAuth.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

The GitHub App ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.6.0/docs#id GithubProvider#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `installationId`<sup>Required</sup> <a name="installationId" id="@cdktf/provider-github.provider.GithubProviderAppAuth.property.installationId"></a>

```typescript
public readonly installationId: string;
```

- *Type:* string

The GitHub App installation instance ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.6.0/docs#installation_id GithubProvider#installation_id}

---

##### `pemFile`<sup>Required</sup> <a name="pemFile" id="@cdktf/provider-github.provider.GithubProviderAppAuth.property.pemFile"></a>

```typescript
public readonly pemFile: string;
```

- *Type:* string

The GitHub App PEM file contents.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.6.0/docs#pem_file GithubProvider#pem_file}

---

### GithubProviderConfig <a name="GithubProviderConfig" id="@cdktf/provider-github.provider.GithubProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-github.provider.GithubProviderConfig.Initializer"></a>

```typescript
import { provider } from '@cdktf/provider-github'

const githubProviderConfig: provider.GithubProviderConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.provider.GithubProviderConfig.property.alias">alias</a></code> | <code>string</code> | Alias name. |
| <code><a href="#@cdktf/provider-github.provider.GithubProviderConfig.property.appAuth">appAuth</a></code> | <code><a href="#@cdktf/provider-github.provider.GithubProviderAppAuth">GithubProviderAppAuth</a></code> | app_auth block. |
| <code><a href="#@cdktf/provider-github.provider.GithubProviderConfig.property.baseUrl">baseUrl</a></code> | <code>string</code> | The GitHub Base API URL. |
| <code><a href="#@cdktf/provider-github.provider.GithubProviderConfig.property.insecure">insecure</a></code> | <code>boolean \| cdktf.IResolvable</code> | Enable `insecure` mode for testing purposes. |
| <code><a href="#@cdktf/provider-github.provider.GithubProviderConfig.property.maxRetries">maxRetries</a></code> | <code>number</code> | Number of times to retry a request after receiving an error status codeDefaults to 3. |
| <code><a href="#@cdktf/provider-github.provider.GithubProviderConfig.property.organization">organization</a></code> | <code>string</code> | The GitHub organization name to manage. Use this field instead of `owner` when managing organization accounts. |
| <code><a href="#@cdktf/provider-github.provider.GithubProviderConfig.property.owner">owner</a></code> | <code>string</code> | The GitHub owner name to manage. Use this field instead of `organization` when managing individual accounts. |
| <code><a href="#@cdktf/provider-github.provider.GithubProviderConfig.property.parallelRequests">parallelRequests</a></code> | <code>boolean \| cdktf.IResolvable</code> | Allow the provider to make parallel API calls to GitHub. |
| <code><a href="#@cdktf/provider-github.provider.GithubProviderConfig.property.readDelayMs">readDelayMs</a></code> | <code>number</code> | Amount of time in milliseconds to sleep in between non-write requests to GitHub API. |
| <code><a href="#@cdktf/provider-github.provider.GithubProviderConfig.property.retryableErrors">retryableErrors</a></code> | <code>number[]</code> | Allow the provider to retry after receiving an error status code, the max_retries should be set for this to workDefaults to [500, 502, 503, 504]. |
| <code><a href="#@cdktf/provider-github.provider.GithubProviderConfig.property.retryDelayMs">retryDelayMs</a></code> | <code>number</code> | Amount of time in milliseconds to sleep in between requests to GitHub API after an error response. |
| <code><a href="#@cdktf/provider-github.provider.GithubProviderConfig.property.token">token</a></code> | <code>string</code> | The OAuth token used to connect to GitHub. |
| <code><a href="#@cdktf/provider-github.provider.GithubProviderConfig.property.writeDelayMs">writeDelayMs</a></code> | <code>number</code> | Amount of time in milliseconds to sleep in between writes to GitHub API. |

---

##### `alias`<sup>Optional</sup> <a name="alias" id="@cdktf/provider-github.provider.GithubProviderConfig.property.alias"></a>

```typescript
public readonly alias: string;
```

- *Type:* string

Alias name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.6.0/docs#alias GithubProvider#alias}

---

##### `appAuth`<sup>Optional</sup> <a name="appAuth" id="@cdktf/provider-github.provider.GithubProviderConfig.property.appAuth"></a>

```typescript
public readonly appAuth: GithubProviderAppAuth;
```

- *Type:* <a href="#@cdktf/provider-github.provider.GithubProviderAppAuth">GithubProviderAppAuth</a>

app_auth block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.6.0/docs#app_auth GithubProvider#app_auth}

---

##### `baseUrl`<sup>Optional</sup> <a name="baseUrl" id="@cdktf/provider-github.provider.GithubProviderConfig.property.baseUrl"></a>

```typescript
public readonly baseUrl: string;
```

- *Type:* string

The GitHub Base API URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.6.0/docs#base_url GithubProvider#base_url}

---

##### `insecure`<sup>Optional</sup> <a name="insecure" id="@cdktf/provider-github.provider.GithubProviderConfig.property.insecure"></a>

```typescript
public readonly insecure: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Enable `insecure` mode for testing purposes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.6.0/docs#insecure GithubProvider#insecure}

---

##### `maxRetries`<sup>Optional</sup> <a name="maxRetries" id="@cdktf/provider-github.provider.GithubProviderConfig.property.maxRetries"></a>

```typescript
public readonly maxRetries: number;
```

- *Type:* number

Number of times to retry a request after receiving an error status codeDefaults to 3.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.6.0/docs#max_retries GithubProvider#max_retries}

---

##### `organization`<sup>Optional</sup> <a name="organization" id="@cdktf/provider-github.provider.GithubProviderConfig.property.organization"></a>

```typescript
public readonly organization: string;
```

- *Type:* string

The GitHub organization name to manage. Use this field instead of `owner` when managing organization accounts.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.6.0/docs#organization GithubProvider#organization}

---

##### `owner`<sup>Optional</sup> <a name="owner" id="@cdktf/provider-github.provider.GithubProviderConfig.property.owner"></a>

```typescript
public readonly owner: string;
```

- *Type:* string

The GitHub owner name to manage. Use this field instead of `organization` when managing individual accounts.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.6.0/docs#owner GithubProvider#owner}

---

##### `parallelRequests`<sup>Optional</sup> <a name="parallelRequests" id="@cdktf/provider-github.provider.GithubProviderConfig.property.parallelRequests"></a>

```typescript
public readonly parallelRequests: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Allow the provider to make parallel API calls to GitHub.

You may want to set it to true when you have a private Github Enterprise without strict rate limits. Although, it is not possible to enable this setting on github.com because we enforce the respect of github.com's best practices to avoid hitting abuse rate limitsDefaults to false if not set

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.6.0/docs#parallel_requests GithubProvider#parallel_requests}

---

##### `readDelayMs`<sup>Optional</sup> <a name="readDelayMs" id="@cdktf/provider-github.provider.GithubProviderConfig.property.readDelayMs"></a>

```typescript
public readonly readDelayMs: number;
```

- *Type:* number

Amount of time in milliseconds to sleep in between non-write requests to GitHub API.

Defaults to 0ms if not set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.6.0/docs#read_delay_ms GithubProvider#read_delay_ms}

---

##### `retryableErrors`<sup>Optional</sup> <a name="retryableErrors" id="@cdktf/provider-github.provider.GithubProviderConfig.property.retryableErrors"></a>

```typescript
public readonly retryableErrors: number[];
```

- *Type:* number[]

Allow the provider to retry after receiving an error status code, the max_retries should be set for this to workDefaults to [500, 502, 503, 504].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.6.0/docs#retryable_errors GithubProvider#retryable_errors}

---

##### `retryDelayMs`<sup>Optional</sup> <a name="retryDelayMs" id="@cdktf/provider-github.provider.GithubProviderConfig.property.retryDelayMs"></a>

```typescript
public readonly retryDelayMs: number;
```

- *Type:* number

Amount of time in milliseconds to sleep in between requests to GitHub API after an error response.

Defaults to 1000ms or 1s if not set, the max_retries must be set to greater than zero.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.6.0/docs#retry_delay_ms GithubProvider#retry_delay_ms}

---

##### `token`<sup>Optional</sup> <a name="token" id="@cdktf/provider-github.provider.GithubProviderConfig.property.token"></a>

```typescript
public readonly token: string;
```

- *Type:* string

The OAuth token used to connect to GitHub.

Anonymous mode is enabled if both `token` and `app_auth` are not set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.6.0/docs#token GithubProvider#token}

---

##### `writeDelayMs`<sup>Optional</sup> <a name="writeDelayMs" id="@cdktf/provider-github.provider.GithubProviderConfig.property.writeDelayMs"></a>

```typescript
public readonly writeDelayMs: number;
```

- *Type:* number

Amount of time in milliseconds to sleep in between writes to GitHub API.

Defaults to 1000ms or 1s if not set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.6.0/docs#write_delay_ms GithubProvider#write_delay_ms}

---



